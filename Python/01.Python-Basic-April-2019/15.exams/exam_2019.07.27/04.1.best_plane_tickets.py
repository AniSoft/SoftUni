min_stay = 10000000000
best_ticket = ''
best_ticket_no_transfer_price = 0

number_ticket = input()
while number_ticket != 'End':
    price = float(input())
    stay = int(input())

    price_lv = price * 1.96

    if stay < min_stay:
        best_ticket_no_transfer_price = price_lv
        best_ticket = number_ticket
        min_stay = stay

    number_ticket = input()

hour_stay = min_stay // 60
minute_stay = min_stay % 60

print(f'Ticket found for flight {best_ticket} costs {best_ticket_no_transfer_price:.2f} leva with {hour_stay}h {minute_stay}m stay')