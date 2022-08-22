team_name = input()
games = int(input())

w_counter = 0
d_counter = 0
l_counter = 0
total_points = 0
total_counter = 0
for i in range(1, games + 1):
    result = input()

    if result == 'W':
        w_counter += 1
        total_points += 3
    elif result == 'D':
        d_counter += 1
        total_points += 1
    elif result == 'L':
        l_counter += 1

    total_counter += 1

if games == 0:
    print(f'{team_name} hasn\'t played any games during this season.')
elif games > 0:
    print(f'{team_name} has won {total_points} points during this season.')
    print(f'Total stats:')
    print(f'## W: {w_counter}')
    print(f'## D: {d_counter}')
    print(f'## L: {l_counter}')
    print(f'Win rate: {w_counter / total_counter * 100:.2f}%')