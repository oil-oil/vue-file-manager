<!--  -->
<template>
  <div>
    <div class>
      <el-tree :data="fileList">
        <template #default="{ node, data }">
          <div class="tree-item">
            <Icon :name="suffix(node.ext)"></Icon>
            <span class="label">{{ node.label }}</span>
          </div>
        </template>
      </el-tree>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from "vue"
import { ElTree } from "element-plus"
import Icon from "@/components/Icon/index.vue"
import http from '@/utils/http';

const fileList = ref([])
onMounted(async () => {
  fileList.value = await http.get("/file/getFileList")
  console.log(fileList)
})



</script>

<style lang='scss' scoped>
:deep(.el-tree-node__content) {
  height: auto;
}
.tree-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  .label {
    margin-left: 3px;
  }
}
</style>