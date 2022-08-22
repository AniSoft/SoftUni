max_bad_grades = int(input())

current_bad_grades = 0

suspended = False
sum_grades = 0
problems_counter = 0
last_problem = ''

problem_name = input()

while not problem_name == 'Enough':
    grade = int(input())
    sum_grades += grade
    problems_counter += 1
    last_problem = problem_name

    if grade <= 4:
        current_bad_grades += 1
        if current_bad_grades == max_bad_grades:
            suspended = True
            break

    problem_name = input()

if suspended:
    print(f"You need a break, {current_bad_grades} poor grades.")
else:
    print(f"Average score: {(sum_grades/problems_counter):.2f}")
    print(f"Number of problems: {problems_counter}")
    print(f"Last problem: {last_problem}")
