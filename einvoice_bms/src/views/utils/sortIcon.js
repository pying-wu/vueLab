import { computed, ref } from "vue";
export function sort(type, users) {
    // sortData
    let sortData = computed(() => {
        var vm = users;
        let sorter = vm.sortType;

        return vm.sort(function (a, b) {
            if (vm.isReverse) {
                if (a[sorter] > b[sorter]) {
                    return 1;
                }
                if (a[sorter] < b[sorter]) {
                    return -1;
                }
                return 0;
            } else {
                if (a[sorter] > b[sorter]) {
                    return -1;
                }
                if (a[sorter] < b[sorter]) {
                    return 1;
                }
                return 0;
            }
        });
    });

    var vm = users;
    let asc = ref(true);
    if (vm.sortType == type) {
        vm.isReverse = !vm.isReverse;
        asc.value = !vm.isReverse;
    } else {
        vm.isReverse = false;
        asc.value = !vm.isReverse;
    }
    vm.sortType = type;

    return {
        sortData,
        asc
    };
}
