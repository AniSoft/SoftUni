name = input()

level = 1
sum_grades = 0
bad_grades_counter = 0
while level <= 12:
    if bad_grades_counter == 2:
        print(f'{name} has been excluded at {level} grade')
        break

    grade = float(input())
    if grade < 4.00:
        bad_grades_counter += 1
    else:
        level += 1
        sum_grades += grade
if bad_grades_counter < 2:
    print(f'{name} graduated. Average grade: {(sum_grades / 12):.2f}')
