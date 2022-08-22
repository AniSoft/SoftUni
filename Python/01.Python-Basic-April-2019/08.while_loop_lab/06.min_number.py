import sys

numbers_count = int(input())

input_count = 1
smallest_number = sys.maxsize

while input_count <= numbers_count:
    current_number = int(input())
    input_count += 1
    if current_number < smallest_number:
        smallest_number = current_number

print(smallest_number)