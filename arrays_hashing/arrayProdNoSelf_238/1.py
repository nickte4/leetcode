#   time O(n)
#       calculates prefix and postfix of each number
#
def product_except_self(nums: List[int]):
    res = []
    prefix = []
    postfix = []
    acc = 1
    for num in nums:
        acc *= num
        prefix.append(acc)
    acc = 1
    for num in reversed(nums):
        acc *= num
        postfix.insert(0, acc) # insert to end of list
    for idx, num in enumerate(nums):
        if idx == 0:
            res.append(postfix[1])
        elif idx == len(nums) - 1:
            res.append(prefix[len(nums)-1])
        else:
            res.append(prefix[idx - 1] * postfix[idx + 1])
    return res
