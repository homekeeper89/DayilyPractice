def bubble_sort(num_list):
    temp = 0
    for index in range(1, len(num_list)):
        for v in range(index, 0, -1):
            min_num = num_list[v]
            if min_num < num_list[v-1]:
                num_list[v] = num_list[v-1]
                num_list[v-1] = min_num
                min_num = num_list[v]
    return num_list


    return num_list

