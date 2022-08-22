best_points = 0
winner = ''
name = input()
while name != 'Stop':
    current_points = 0

    for i in range(1, len(name) + 1):
        number = int(input())

        name_number = ord(name[i - 1])
        if number == int(name_number):
            current_points += 10
        else:
            current_points += 2

    if current_points >= best_points:
        best_points = current_points
        winner = name

    name = input()

print(f'The winner is {winner} with {best_points} points!')