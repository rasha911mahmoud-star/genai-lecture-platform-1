# ⚡ خطوات النشر السريعة

## 📥 1. تحميل المشروع

حمّل الملف المضغوط `genai-lecture-platform.zip` وفك الضغط عنه.

---

## 🌐 2. إنشاء مستودع GitHub

1. اذهب إلى: https://github.com/new
2. اسم المستودع: `genai-lecture-platform`
3. اختر **Public**
4. ❌ لا تختر أي خيارات إضافية
5. اضغط **Create repository**

---

## 💻 3. رفع الملفات

افتح Terminal/CMD في مجلد المشروع:

```bash
cd genai-lecture-platform

git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/genai-lecture-platform.git
git branch -M main
git push -u origin main
```

**غيّر `YOUR_USERNAME` باسم حسابك على GitHub**

---

## ⚙️ 4. تفعيل GitHub Pages

1. اذهب للمستودع على GitHub
2. **Settings** → **Pages**
3. **Source**: اختر **GitHub Actions**
4. احفظ

---

## 📦 5. تثبيت المكتبات

```bash
npm install
```

---

## ✅ 6. انتهى!

انتظر 2-3 دقائق، ثم افتح:

```
https://YOUR_USERNAME.github.io/genai-lecture-platform/
```

---

## 🔄 للتحديث لاحقاً

```bash
git add .
git commit -m "تحديث"
git push
```

سيتم النشر تلقائياً! ✨
