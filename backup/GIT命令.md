Git 是一个分布式版本控制系统，用于跟踪代码变更、管理项目版本。常用的 Git 命令可以帮助你初始化仓库、提交代码、查看历史等。

## 常用 Git 命令列表

- `git init`：初始化一个新的 Git 仓库。
- `git clone <url>`：克隆远程仓库到本地。
- `git add <file>`：将文件添加到暂存区。
- `git commit -m "message"`：提交暂存区的变更到本地仓库。
- `git status`：查看当前仓库状态。
- `git log`：查看提交历史。
- `git branch`：列出分支或创建分支。
- `git checkout <branch>`：切换分支。
- `git merge <branch>`：合并分支。
- `git pull`：从远程仓库拉取最新代码。
- `git push`：推送本地代码到远程仓库。

## 一个完整例子：创建并提交代码到本地仓库

假设你有一个新项目文件夹 `my-project`，想用 Git 管理它。

```bash
# 1. 进入项目目录
cd my-project

# 2. 初始化 Git 仓库
git init

# 3. 创建一个文件（例如 README.md）
echo "# My Project" > README.md
```
# 4. 添加文件到暂存区
git add README.md
```
# 5. 提交变更
git commit -m "Initial commit: 添加 README"
```
# 6. 查看提交历史
git log --oneline
```
执行后，你会看到类似输出：
texta1b2c3d (HEAD -> master) Initial commit: 添加 README
这个例子展示了 Git 的基本工作流程：初始化 → 添加文件 → 提交变更。