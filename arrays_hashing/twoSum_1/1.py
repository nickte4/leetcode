# time O(1)
# worst case:
#   one pass through nums to make map
#   one pass through nums to find
#   num_to_find
def two_sum(nums: List[int], target: int):
    map = dict()
    for idx, num in enumerate(nums):
        map[num] = idx
    for idx, curr_num in enumerate(nums):
        num_to_find = target - curr_num
        if num_to_find in map and map[num_to_find] != idx:
            return [idx, map[num_to_find]]

# time O(n^2)
# worst case:
#   every index in array is checked
#   with every other index
def bad_sum(nums: List[int], target: int):
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]

