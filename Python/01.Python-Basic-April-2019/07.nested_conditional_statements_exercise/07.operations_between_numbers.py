n1 = int(input())
n2 = int(input())
operator = input()

type = ""
result = 0
if operator == "+":
    result = n1 + n2
    if result % 2 == 0:
        type = "even"
        print(f"{n1} {operator} {n2} = {result} - {type}")
    else:
        type = "odd"
        print(f"{n1} {operator} {n2} = {result} - {type}")
elif operator == "-":
    result = n1 - n2
    if result % 2 == 0:
        type = "even"
        print(f"{n1} {operator} {n2} = {result} - {type}")
    else:
        type = "odd"
        print(f"{n1} {operator} {n2} = {result} - {type}")
elif operator == "*":
    result = n1 * n2
    if result % 2 == 0:
        type = "even"
        print(f"{n1} {operator} {n2} = {result} - {type}")
    else:
        type = "odd"
        print(f"{n1} {operator} {n2} = {result} - {type}")
elif operator == "/":

    if n2 == 0:
        print(f"Cannot divide {n1} by zero")
    else:
        result = n1 / n2
        print(f"{n1} / {n2} = {result:.2f}")

elif operator == "%":
    if n2 == 0:
        print(f"Cannot divide {n1} by zero")
    else:
        result = n1 % n2
        print(f"{n1} % {n2} = {result}")
