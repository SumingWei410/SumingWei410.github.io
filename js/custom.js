// 自定义 Valine 验证
document.addEventListener('DOMContentLoaded', function() {
  // 监听 Valine 初始化完成
  const valineObserver = setInterval(function() {
    if (document.querySelector('#vcomments .vbtn')) {
      clearInterval(valineObserver);
      setupValineValidation();
    }
  }, 500);
});

function setupValineValidation() {
  const submitBtn = document.querySelector('#vcomments .vbtn');
  if (submitBtn) {
    submitBtn.addEventListener('click', function(e) {
      const nickInput = document.querySelector('#vcomments input.vnick');
      const mailInput = document.querySelector('#vcomments input.vmail');
      
      if (!nickInput.value.trim()) {
        e.preventDefault();
        alert('请输入昵称');
        nickInput.focus();
        return false;
      }
      
      if (!mailInput.value.trim()) {
        e.preventDefault();
        alert('请输入邮箱');
        mailInput.focus();
        return false;
      }
      
      // 简单的邮箱格式验证
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(mailInput.value)) {
        e.preventDefault();
        alert('请输入有效的邮箱地址');
        mailInput.focus();
        return false;
      }
    });
  }
}