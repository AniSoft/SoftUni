number_tickets = int(input())

decode = ''
for i in range(1, number_tickets + 1):
    ticket = input()

    if len(ticket) == 4:
        if 65 < ord(ticket[0]) < 90:
            decode = ticket[0] + ticket[1] + ticket[2]
        else:
            decode = ticket[3] + ticket[1] + ticket[2]
    elif len(ticket) == 5 or len(ticket) == 6:
        decode = ticket[0] + str(ord(ticket[1]))

    print(f'Seat decoded: {decode}')
