searched_book = input()
library_size = int(input())

books_counter = 0
is_found = False

while books_counter < library_size:
    current_book = input()

    if searched_book == current_book:
        print(f"You checked {books_counter} books and found it.")
        is_found = True
        break

    books_counter += 1

if not is_found:
    print(f"The book you search is not here!")
    print(f"You checked {books_counter} books.")