import math

income = float(input())
grade = float(input())
min_salary = float(input())

social_scholarship_bool = False
excelent_scholarship_bool = False

if income < min_salary and grade > 4.50:
    social_scholarship_bool = True
    social_scholarship = min_salary * 0.35
if grade >= 5.50:
    excelent_scholarship_bool = True
    excelent_scholarship = grade * 25

if social_scholarship_bool and excelent_scholarship_bool:
    if social_scholarship > excelent_scholarship:
        print(f"You get a Social scholarship {math.floor(social_scholarship)} BGN")
    else:
        print(f"You get a scholarship for excellent results {math.floor(excelent_scholarship)} BGN")
elif social_scholarship_bool:
    print(f"You get a Social scholarship {math.floor(social_scholarship)} BGN")
elif excelent_scholarship_bool:
    print(f"You get a scholarship for excellent results {math.floor(excelent_scholarship)} BGN")
else:
    print("You cannot get a scholarship!")
