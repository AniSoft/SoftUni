number = float(input())

enter_dim = input()
exit_dim = input()

if enter_dim == 'mm' and exit_dim == 'm':
    print(f'{number / 1000:0.3f}')
elif enter_dim == 'mm' and exit_dim == 'cm':
    print(f'{number / 10:0.3f}')
elif enter_dim == 'cm' and exit_dim == 'm':
    print(f'{number / 100:0.3f}')
elif enter_dim == 'cm' and exit_dim == 'mm':
    print(f'{number * 10:0.3f}')
elif enter_dim == 'm' and exit_dim == 'cm':
    print(f'{number * 100:0.3f}')
elif enter_dim == 'm' and exit_dim == 'mm':
    print(f'{number * 1000:0.3f}')
