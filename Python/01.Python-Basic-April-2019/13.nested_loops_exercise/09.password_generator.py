n = int(input())
l = int(input())

for i1 in range(1,n+1):
    for i2 in range(1,n+1):
        for i3 in range(int('a'),l+1):
            for i4 in range(int('a'),l+1):
                for i5 in range(2,n):
                    if i5>i1 and i5>i2:
                        print(f'{i1}{i2}{i3}{i4}{i5}')
