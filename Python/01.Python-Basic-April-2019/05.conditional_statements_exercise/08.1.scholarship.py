import math

income = float(input())
score = float(input())
min_salary = float(input())

scholarship_social = 0
scholarship_score = 0

if income < min_salary and score > 4.5:
    scholarship_social = min_salary * 0.35

if score >= 5.5:
    scholarship_score = score * 25

if scholarship_score > scholarship_social:
    print(f"You get a scholarship for excellent results {math.floor(scholarship_score)} BGN")
elif scholarship_social > scholarship_score:
    print(f"You get a Social scholarship {math.floor(scholarship_social)} BGN")
else:
    print("You cannot get a scholarship!")
