student = 0
standard = 0
kid = 0

film_name = input()
while film_name != 'Finish':
    place = int(input())

    people = 0
    for i in range(1, place + 1):
        tickets_type = input()
        if tickets_type == 'student':
            student += 1
        elif tickets_type == 'standard':
            standard += 1
        elif tickets_type == 'kid':
            kid += 1
        elif tickets_type == 'End':
            break
        people += 1

    full_place = people / place * 100
    print(f'{film_name} - {full_place:.2f}% full.')

    film_name = input()

total_tickets = student + standard + kid
student_tickets = (student / total_tickets) * 100
standard_tickets = (standard / total_tickets) * 100
kid_tickets = (kid / total_tickets) * 100

print(f'Total tickets: {total_tickets}')
print(f'{student_tickets:.2f}% student tickets.')
print(f'{standard_tickets:.2f}% standard tickets.')
print(f'{kid_tickets:.2f}% kids tickets.')
