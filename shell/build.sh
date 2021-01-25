###
 # @Author: your name
 # @Date: 2021-01-25 10:41:05
 # @LastEditTime: 2021-01-25 10:42:29
 # @LastEditors: Please set LastEditors
 # @Description: In User Settings Edit
 # @FilePath: \offical\shell\build.sh
### 
# 打包脚本
project=/data/code/offical

cd $project
git pull

npm install
npm run build