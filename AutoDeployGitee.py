import time
from selenium import webdriver
from selenium.webdriver.common.alert import Alert
import  os

def main():
    # option = webdriver.ChromeOptions()
    # option.add_argument('headless')#option 是用来设置不弹出chrome界面的

    url = "https://gitee.com/knxhd_admin/knxhd-blogs/pages"

    #执行hexo d 推送至远程仓库
    os.system("sh deploy01.sh")
    print("-----------开始更新giteepage服务-------")
    driver = webdriver.Chrome()

    # 打开链接
    driver.get(url)

    # 下面就是登陆自己的账号。登陆账号之后才能部署
    # 找到右上角登陆的按钮并点击
    driver.find_element_by_xpath('//*[@id="git-nav-user-bar"]/a[1]').click()

    # 输入用户名
    driver.find_element_by_xpath('//*[@id="user_login"]').send_keys("knxhd_admin")

    # 输入密码
    driver.find_element_by_xpath('//*[@id="user_password"]').send_keys("t915_j529@")

    # 点击登录
    driver.find_element_by_xpath('//*[@class="git-login-form-fields"]/div[4]/input').click()

    # 等加载好，如果不等加载好可能会点击不上
    time.sleep(2)

    # 点击更新按钮
    driver.find_element_by_xpath('//*[@id="pages-branch"]/div[6]').click()

    # 处理提示框点确定
    Alert(driver).accept()


    # 等待部署完成
    time.sleep(30)
    driver.quit()

if __name__ == '__main__':
    main()
