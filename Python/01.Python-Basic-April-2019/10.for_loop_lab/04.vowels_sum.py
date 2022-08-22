input_text = input()

sum_vowels = 0
for char in input_text:
    if char == 'a':
        sum_vowels += 1
    elif char == 'e':
        sum_vowels += 2
    elif char == 'i':
        sum_vowels += 3
    elif char == 'o':
        sum_vowels += 4
    elif char == 'u':
        sum_vowels += 5
print(sum_vowels)