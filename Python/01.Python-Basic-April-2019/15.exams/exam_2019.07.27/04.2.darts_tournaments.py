starting_points = int(input())
shots_counter = 0
won = False

while starting_points > 0:
    sector = input()
    shots_counter += 1

    if sector == 'bullseye':
        won = True
        break

    points = int(input())
    if sector == 'number section':
        starting_points -= points
    elif sector == 'double ring':
        starting_points -= points * 2
    elif sector == 'triple ring':
        starting_points -= points * 3

    if starting_points < 0:
        break

if won:
    print(f'Congratulations! You won the game with a bullseye in {shots_counter} moves!')
elif starting_points == 0:
    print(f'Congratulations! You won the game in {shots_counter} moves!')
else:
    print(f'Sorry, you lost. Score difference: {abs(starting_points)}.')
