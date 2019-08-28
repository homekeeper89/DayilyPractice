number = [5,3,8,6,7,2]

# bubble sort에서 굳이 min_num을 할 필요가 없다.
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


def selection_sort(num_list):
    # 갯수 만큼 순회한다
    # 제일 작은 값을 선정한다. 처음에는 최초 순회하는 원소
    # 다른 원소들을 순회할때 자기보다 작은 값이 있으면 최소값을 바꾼다.
    # 리스트의 원소에 집착말고 자리에 집중하자. 인덱스에
    for index, value in enumerate(num_list):
        for v in range(index, len(num_list)):
            position = index
            min_num = num_list[index]
            if min_num > num_list[v]:
                min_num = num_list[v]
                position = v
        num_list[index] = min_num
        num_list[position] = value
    return num_list

def insertion_sort(num_list):
    # 전체 원소 갯수 만큼 순회한다. 1번째부터
    # 0번 인덱스가 정렬된 리스트라고 가정
    # 비교 리스트 횟수만큼 돌거나 작으면 멈춤
    # 이게 왜 되지??
    for i in range(len(num_list)):
        for v in range(i, 0, -1):
            if num_list[v-1] > num_list[v]:
                temp = num_list[v]
                num_list[v] = num_list[v-1]
                num_list[v-1] = temp
    return num_list



