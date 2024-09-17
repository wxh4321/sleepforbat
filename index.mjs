#! /usr/bin/env node
import pc from "picocolors";
import { exec } from "child_process";

function sleep(ms){
 // nodejs 睡眠ms 毫秒
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main(){
    // 从控制台接受数据 用空格隔开
    const args = process.argv.slice(2);
    const time= args[0] || 5000; 
    const cmd = args[1] || "";
    // 执行命令
    console.log(pc.green(`请稍等一会儿大约${Math.ceil(time/1000)}秒钟...`));
    await sleep(time)
    // 执行.bat 文件
    if(cmd){
      exec(cmd);
      console.log(pc.green(`执行成功！`));
    }
    

}
main();