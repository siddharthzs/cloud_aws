

# select two elements 
# result = substract of their power


from bisect import bisect_left

def take_closest(myList, myNumber):
    """
    Assumes myList is sorted. Returns closest value to myNumber.

    If two numbers are equally close, return the smallest number.
    """
    pos = bisect_left(myList, myNumber)
    if pos == 0:
        return myList[0]
    if pos == len(myList):
        return myList[-1]
    before = myList[pos - 1]
    after = myList[pos]
    if after - myNumber < myNumber - before:
        return after
    else:
        return before

def solve(powerArr, desired_result, n):
    powerArr.sort()
    num1 = powerArr[0]
    num2 = powerArr[1]
    print(powerArr)
    for i in range(n):
        t = take_closest(powerArr,abs(powerArr[i] - desired_result))
        print(t, powerArr[i], desired_result )
        if(desired_result - abs(t - powerArr[i]) < desired_result - abs(num2 - num1)):
            num1 = powerArr[i]
            num2 = t
    
    return num1 + num2

# res = solve([2,1,4,2,3,2,2,6], 5,8)
# print(res)






