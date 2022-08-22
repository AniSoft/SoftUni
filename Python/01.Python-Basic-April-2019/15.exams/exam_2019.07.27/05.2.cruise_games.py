import math

player = input()
games = int(input())

total_points = 0
total_points_volleyball = 0
total_points_tennis = 0
total_points_badminton = 0

counter_volleyball = 0
counter_tennis = 0
counter_badminton = 0
for i in range(1, games + 1):
    game_name = input()
    points = int(input())

    if game_name == 'volleyball':
        counter_volleyball += 1
        total_points_volleyball += points * 1.07

    elif game_name == 'tennis':
        counter_tennis += 1
        total_points_tennis += points * 1.05

    elif game_name == 'badminton':
        counter_badminton += 1
        total_points_badminton += points * 1.02

average_volleyball = math.floor(total_points_volleyball / counter_volleyball)
average_tennis = math.floor(total_points_tennis / counter_tennis)
average_badminton = math.floor(total_points_badminton / counter_badminton)

total_points = math.floor(total_points_tennis + total_points_badminton + total_points_volleyball)

if average_volleyball >= 75 and average_tennis >= 75 and average_volleyball >= 75:
    print(f'Congratulations, {player}! You won the cruise games with {total_points} points.')
else:
    print(f'Sorry, {player}, you lost. Your points are only {total_points}.')
