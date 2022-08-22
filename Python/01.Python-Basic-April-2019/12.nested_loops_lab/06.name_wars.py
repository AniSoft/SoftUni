max_sum_letters = 0
winner = None
while True:
    name = input()

    if name == 'STOP':
        print(f'Winner is {winner} - {max_sum_letters}!')
        break

    sum_letters = 0

    for letter in name:
        sum_letters += ord(letter)

    if sum_letters >= max_sum_letters:
        max_sum_letters = sum_letters
        winner = name