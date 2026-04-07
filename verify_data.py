import json
import os

TEMPLATES = [
    r"C:\Users\admin\OneDrive\Applywizz\Harsh-s-Portfolio\data.json",
    r"C:\Users\admin\OneDrive\Applywizz\portfolio\data.json",
    r"C:\Users\admin\OneDrive\Applywizz\portfolio-2.0\data.json",
    r"C:\Users\admin\OneDrive\Applywizz\react-portfolio-template\data.json",
    r"C:\Users\admin\OneDrive\Applywizz\developerFolio\data.json"
]

RULES = [
    "Rule 1: Top-level keys (personal, experience, projects, skills, education, extras, meta)",
    "Rule 2: Object vs Array (personal, meta as objects; others as arrays)",
    "Rule 3: Consistent shape in arrays (projects, experience, education)",
    "Rule 4: Skills categorization",
    "Rule 6: Extras sub-items shape (label, description, url, date)",
    "Rule 7: Meta block (template_id, version)"
]

def validate_json(file_path):
    print(f"Validating: {file_path}")
    if not os.path.exists(file_path):
        print("  - ERROR: File does not exist")
        return False
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except Exception as e:
        print(f"  - ERROR: Failed to parse JSON: {e}")
        return False

    errors = []

    # Rule 1 & 2
    required_keys = {"personal", "experience", "projects", "skills", "education", "extras", "meta"}
    for key in required_keys:
        if key not in data:
            errors.append(f"Missing top-level key: {key}")
        else:
            if key in ["personal", "meta"]:
                if not isinstance(data[key], dict):
                    errors.append(f"'{key}' must be an object")
            else:
                if not isinstance(data[key], list):
                    errors.append(f"'{key}' must be an array")

    # Rule 4: Skills
    if "skills" in data and isinstance(data["skills"], list):
        for item in data["skills"]:
            if not isinstance(item, dict) or "category" not in item or "items" not in item:
                errors.append(f"Skill item invalid: {item}")

    # Rule 6: Extras
    if "extras" in data and isinstance(data["extras"], list):
        for section in data["extras"]:
            if "section_title" not in section or "items" not in section or not isinstance(section["items"], list):
                errors.append(f"Extra section invalid: {section.get('section_title', 'Unknown')}")
            else:
                for item in section["items"]:
                    required_sub_keys = {"label", "description", "url", "date"}
                    if not all(k in item for k in required_sub_keys):
                        errors.append(f"Extra item missing keys in {section['section_title']}: {item}")

    # Rule 7: Meta
    if "meta" in data and isinstance(data["meta"], dict):
        if "template_id" not in data["meta"] or "version" not in data["meta"]:
            errors.append("Meta block missing template_id or version")

    if errors:
        for err in errors:
            print(f"  - ERROR: {err}")
        return False
    else:
        print("  - OK")
        return True

if __name__ == "__main__":
    all_passed = True
    for t in TEMPLATES:
        if not validate_json(t):
            all_passed = False
    
    if all_passed:
        print("\nAll files passed validation!")
        exit(0)
    else:
        print("\nSome files failed validation.")
        exit(1)
