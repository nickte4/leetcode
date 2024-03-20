#
# runtime: O(n)
#
def longest_consecutive(nums):
    num_set = set(nums)
    length = 0
    for start in nums:
        if start - 1 not in num_set:
            end = start + 1
            while end in num_set:
                end += 1
            length = max(length, end - start)
    return length

# [100, 4, 200, 1, 3, 2]
#
#
# set: {100, 4, 200, 1, 3, 2} 
#
# find smallest number x: O(n)
# 
# longestConNum = 0
# currConNum = 0
# while (set.contains(x + 1)) {
#   currConNum += 1
#   x += 1 # go to next number
#   if (currConNum > longestConNum) {
#       longestConNum = currConNum
#   }
# }
#
# 
#
