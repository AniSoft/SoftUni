import math

income = float(input())
grade = float(input())
salary = float(input())

social_scholarship = 0
excellent_scholarship = 0

if income < salary and grade > 4.5:
    social_scholarship = salary * 0.35

if grade >= 5.5:
    excellent_scholarship = grade * 25

if excellent_scholarship > social_scholarship:
    print(f'You get a scholarship for excellent results {math.floor(excellent_scholarship)} BGN')
elif social_scholarship > excellent_scholarship:
    print(f'You get a Social scholarship {math.floor(social_scholarship)} BGN')
else:
    print(f'You cannot get a scholarship!')
