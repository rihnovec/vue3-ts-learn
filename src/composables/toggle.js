import {ref, defineEmits} from 'vue'

export const useToggle = (checkedOnDefault) => {
  const isChecked = ref(checkedOnDefault)
  // const emit = defineEmits['toggle']

  function onClick() {
    isChecked.value = !isChecked.value
    // emit('toggle')
  }

  return {
    isChecked, onClick
  }
}