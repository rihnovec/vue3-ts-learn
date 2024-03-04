import {ref} from 'vue'

export const useToggle = (checkedOnDefault) => {
  const isChecked = ref(checkedOnDefault)

  function onClick() {
    isChecked.value = !isChecked.value
  }

  return {
    isChecked, onClick
  }
}