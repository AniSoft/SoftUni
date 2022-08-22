games = int(input())

counter_hearthstone = 0
counter_fornite = 0
counter_overwatch = 0
counter_others = 0
total_counter = 0
for i in range(1, games + 1):
    game_name = input()

    if game_name == 'Hearthstone':
        counter_hearthstone += 1
    elif game_name == 'Fornite':
        counter_fornite += 1
    elif game_name == 'Overwatch':
        counter_overwatch += 1
    else:
        counter_others += 1

    total_counter += 1

print(f'Hearthstone - {(counter_hearthstone / total_counter) * 100:.2f}%')
print(f'Fornite - {(counter_fornite / total_counter) * 100:.2f}%')
print(f'Overwatch - {(counter_overwatch / total_counter) * 100:.2f}%')
print(f'Others - {(counter_others / total_counter) * 100:.2f}%')
