#!/usr/bin/env python3
"""
Backend API Testing Script for Printing Company Enquiry System
Tests the Enquiry API endpoints
"""

import requests
import json
from datetime import datetime

# Read backend URL from frontend/.env
BACKEND_URL = "https://print-studio-beta-1.preview.emergentagent.com/api"

def print_test_header(test_name):
    print(f"\n{'='*80}")
    print(f"TEST: {test_name}")
    print(f"{'='*80}")

def print_result(success, message):
    status = "✅ PASS" if success else "❌ FAIL"
    print(f"{status}: {message}")

def test_create_enquiry():
    """Test POST /api/enquiries - Create a new enquiry"""
    print_test_header("POST /api/enquiries - Create Enquiry")
    
    url = f"{BACKEND_URL}/enquiries"
    payload = {
        "name": "Rajesh Kumar",
        "company": "Kumar Printing Solutions",
        "email": "rajesh.kumar@kumarprintings.com",
        "phone": "+919876543210",
        "interest": "Buying a high-volume copier machine",
        "message": "We need a high-volume copier for our printing business. Looking for machines that can handle 10000+ pages per day."
    }
    
    try:
        response = requests.post(url, json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
        
        if response.status_code == 200:
            data = response.json()
            
            # Verify required fields
            checks = [
                ('id' in data, "Response contains 'id' field"),
                ('status' in data and data['status'] == 'new', "Status is 'new'"),
                ('created_at' in data, "Response contains 'created_at' timestamp"),
                (data.get('name') == payload['name'], "Name matches"),
                (data.get('email') == payload['email'], "Email matches"),
                (data.get('phone') == payload['phone'], "Phone matches"),
                (data.get('interest') == payload['interest'], "Interest matches"),
                ('_id' not in data, "MongoDB _id is not leaked")
            ]
            
            all_passed = True
            for check, message in checks:
                print_result(check, message)
                if not check:
                    all_passed = False
            
            if all_passed:
                print_result(True, "All validations passed")
                return data['id']  # Return the ID for subsequent tests
            else:
                print_result(False, "Some validations failed")
                return None
        else:
            print_result(False, f"Expected status 200, got {response.status_code}")
            return None
            
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return None

def test_create_enquiry_validation():
    """Test POST /api/enquiries - Validation for required fields"""
    print_test_header("POST /api/enquiries - Validation (Missing 'name')")
    
    url = f"{BACKEND_URL}/enquiries"
    # Missing 'name' field - should return 422
    payload = {
        "company": "Test Company",
        "email": "test@example.com",
        "phone": "+919876543210",
        "interest": "Buying a machine"
    }
    
    try:
        response = requests.post(url, json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
        
        if response.status_code == 422:
            print_result(True, "Correctly returned 422 for missing required field 'name'")
            return True
        else:
            print_result(False, f"Expected status 422, got {response.status_code}")
            return False
            
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return False

def test_get_enquiries(expected_id=None):
    """Test GET /api/enquiries - List all enquiries"""
    print_test_header("GET /api/enquiries - List Enquiries")
    
    url = f"{BACKEND_URL}/enquiries"
    
    try:
        response = requests.get(url, timeout=10)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Number of enquiries: {len(data)}")
            
            if len(data) > 0:
                print(f"First enquiry: {json.dumps(data[0], indent=2)}")
                
                checks = [
                    (isinstance(data, list), "Response is a list"),
                    ('_id' not in data[0], "MongoDB _id is not leaked"),
                    ('id' in data[0], "Enquiry has 'id' field"),
                    ('created_at' in data[0], "Enquiry has 'created_at' field")
                ]
                
                # Check if sorted newest first (if we have multiple enquiries)
                if len(data) > 1:
                    first_date = datetime.fromisoformat(data[0]['created_at'].replace('Z', '+00:00'))
                    second_date = datetime.fromisoformat(data[1]['created_at'].replace('Z', '+00:00'))
                    checks.append((first_date >= second_date, "Enquiries sorted newest first"))
                
                # Check if our created enquiry is in the list
                if expected_id:
                    found = any(e.get('id') == expected_id for e in data)
                    checks.append((found, f"Created enquiry with id {expected_id} found in list"))
                
                all_passed = True
                for check, message in checks:
                    print_result(check, message)
                    if not check:
                        all_passed = False
                
                if all_passed:
                    print_result(True, "All validations passed")
                    return True
                else:
                    print_result(False, "Some validations failed")
                    return False
            else:
                print_result(False, "No enquiries found in database")
                return False
        else:
            print_result(False, f"Expected status 200, got {response.status_code}")
            return False
            
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return False

def test_update_enquiry_status(enquiry_id):
    """Test PATCH /api/enquiries/{id} - Update enquiry status"""
    print_test_header(f"PATCH /api/enquiries/{enquiry_id} - Update Status")
    
    url = f"{BACKEND_URL}/enquiries/{enquiry_id}"
    payload = {"status": "contacted"}
    
    try:
        response = requests.patch(url, json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
        
        if response.status_code == 200:
            data = response.json()
            
            checks = [
                (data.get('status') == 'contacted', "Status updated to 'contacted'"),
                (data.get('id') == enquiry_id, "Enquiry ID matches"),
                ('_id' not in data, "MongoDB _id is not leaked")
            ]
            
            all_passed = True
            for check, message in checks:
                print_result(check, message)
                if not check:
                    all_passed = False
            
            if all_passed:
                print_result(True, "All validations passed")
                return True
            else:
                print_result(False, "Some validations failed")
                return False
        else:
            print_result(False, f"Expected status 200, got {response.status_code}")
            return False
            
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return False

def test_update_nonexistent_enquiry():
    """Test PATCH /api/enquiries/{id} - Update non-existent enquiry"""
    print_test_header("PATCH /api/enquiries/{fake-id} - Update Non-existent Enquiry")
    
    fake_id = "00000000-0000-0000-0000-000000000000"
    url = f"{BACKEND_URL}/enquiries/{fake_id}"
    payload = {"status": "contacted"}
    
    try:
        response = requests.patch(url, json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
        
        if response.status_code == 404:
            print_result(True, "Correctly returned 404 for non-existent enquiry")
            return True
        else:
            print_result(False, f"Expected status 404, got {response.status_code}")
            return False
            
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return False

def main():
    print("\n" + "="*80)
    print("BACKEND API TESTING - ENQUIRY SYSTEM")
    print(f"Backend URL: {BACKEND_URL}")
    print("="*80)
    
    results = {
        "total": 0,
        "passed": 0,
        "failed": 0
    }
    
    # Test 1: Create enquiry
    results["total"] += 1
    enquiry_id = test_create_enquiry()
    if enquiry_id:
        results["passed"] += 1
    else:
        results["failed"] += 1
    
    # Test 2: Validation - missing required field
    results["total"] += 1
    if test_create_enquiry_validation():
        results["passed"] += 1
    else:
        results["failed"] += 1
    
    # Test 3: Get all enquiries
    results["total"] += 1
    if test_get_enquiries(enquiry_id):
        results["passed"] += 1
    else:
        results["failed"] += 1
    
    # Test 4: Update enquiry status (only if we have a valid ID)
    if enquiry_id:
        results["total"] += 1
        if test_update_enquiry_status(enquiry_id):
            results["passed"] += 1
        else:
            results["failed"] += 1
    
    # Test 5: Update non-existent enquiry
    results["total"] += 1
    if test_update_nonexistent_enquiry():
        results["passed"] += 1
    else:
        results["failed"] += 1
    
    # Print summary
    print("\n" + "="*80)
    print("TEST SUMMARY")
    print("="*80)
    print(f"Total Tests: {results['total']}")
    print(f"✅ Passed: {results['passed']}")
    print(f"❌ Failed: {results['failed']}")
    print(f"Success Rate: {(results['passed']/results['total']*100):.1f}%")
    print("="*80 + "\n")
    
    return results["failed"] == 0

if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)
