#!/bin/bash

# handle=$1;
# env=$2;

# 远程部署机 webhook
# 如果用远程机器部署的话就要用到以下方法
# preHandle(){
#     git pull orgin master
#     npm config set registry http://registry.npm.taobao.org/
#     npm install
#     npm run build-prod
# }
# 清空dist目录
emptyRemoteDist(){
  echo "[exec]remove remote:	118.193.189.35 web"
  ssh fanguyun214@118.193.189.35 "rm -rf /web/*"
}
# 发送文件到正式服
transferFileToProSever(){
    echo "[exec]transfer file to product:118.193.189.35 sever"
    scp -r ./dist/* fanguyun214@118.193.189.35:/web/
}
# 发送文件到测试服
# transferFileToTestSever(){
#     echo "[exec]transfer file to development::yourip sever"
#     scp -r ./dist/* root@yourip:/www/jiketoutiao_admin/
# }


# if [ $handle == "build" ]
# then
#     if [ $env == "prod" ]
#     then
#         env='prod'
#         echo "[exec]build ==> build production"
#         npm run build
#         emptyRemoteDist
#         transferFileToProSever
#     else
#         env='dev'
#         echo "[exec]build ==> build development"
#         npm run build
#         emptyRemoteDist
#         transferFileToTestSever
#     fi
# fi

echo "[exec]build ==> build&push"
npm run build
emptyRemoteDist
transferFileToProSever
