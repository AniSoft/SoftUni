width = int(input())
height = int(input())
length = int(input())
priority = input()

volume = width * height * length
tax = 0
if 50 < volume <= 100:
    if priority == 'true':
        tax = 0
    elif priority == 'false':
        tax = 25
elif 100 < volume <= 200:
    if priority == 'true':
        tax = 10
    elif priority == 'false':
        tax = 50
elif 200 < volume <= 300:
    if priority == 'true':
        tax = 20
    elif priority == 'false':
        tax = 100

print(f'Luggage tax: {tax:.2f}')
