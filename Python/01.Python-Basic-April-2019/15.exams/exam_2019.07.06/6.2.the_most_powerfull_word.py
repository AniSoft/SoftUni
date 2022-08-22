import math

power_sum = 0
power_word = ''

word = input()
while word != 'End of words':

    length = len(word)
    sum = 0
    for i in range(1, length + 1):
        number = ord(word[i - 1])
        sum += number
    if word[0] == 'a' or word[0] == 'e' or word[0] == 'i' or word[0] == 'o' or word[0] == 'u' or word[0] == 'y' or word[
        0] == 'A' or word[0] == 'E' or word[0] == 'I' or word[0] == 'O' or word[0] == 'U' or word[0] == 'Y':
        sum = sum * length
    else:
        sum = math.floor(sum / length)

    if sum > power_sum:
        power_sum = sum
        power_word = word

    word = input()

print(f'The most powerful word is {power_word} - {power_sum}')