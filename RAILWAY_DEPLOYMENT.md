# 🚂 Railway Deployment Guide

## 🚀 Quick Deploy to Railway

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/aviator-casino.git
   git push -u origin main
   ```

2. **Deploy on Railway:**
   - Go to [railway.app](https://railway.app)
   - Click "Start a New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway will automatically detect it's a Node.js project

### Method 2: Railway CLI

1. **Install Railway CLI:**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login and Deploy:**
   ```bash
   railway login
   railway init
   railway up
   ```

## ⚙️ Configuration

### Environment Variables (Optional)
If you need custom environment variables:
- Go to your Railway project dashboard
- Click "Variables" tab
- Add any required environment variables

### Custom Domain (Optional)
1. Go to your Railway project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## 🔧 Project Configuration

The project includes:
- `railway.json` - Railway-specific configuration
- Updated `package.json` - Proper start script for Railway
- Updated `vite.config.ts` - Port configuration for Railway

## 📊 Features After Deployment

Your deployed Aviator Casino will have:
- ✅ Full game functionality
- ✅ User authentication system
- ✅ Admin panel
- ✅ Payment system (Nagad, bKash, Binance Pay)
- ✅ Real-time game engine
- ✅ Responsive design
- ✅ Automatic HTTPS
- ✅ Global CDN

## 🌐 Access Your App

After deployment:
- Railway will provide a URL like: `https://your-app-name.up.railway.app`
- The app will be live and accessible worldwide
- Automatic deployments on every git push

## 🔍 Monitoring

Railway provides:
- Real-time logs
- Resource usage metrics
- Deployment history
- Custom domains
- Environment management

## 💰 Pricing

- **Hobby Plan**: $5/month (includes $5 usage credit)
- **Pro Plan**: $20/month (includes $20 usage credit)
- Pay only for what you use beyond the included credits

## 🆘 Troubleshooting

### Build Fails:
- Check Railway logs in the dashboard
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

### App Won't Start:
- Check if PORT environment variable is used correctly
- Verify start script in package.json
- Check Railway logs for errors

### Performance Issues:
- Monitor resource usage in Railway dashboard
- Consider upgrading plan if needed
- Optimize build size if necessary

---

**Note:** Railway automatically handles SSL certificates, scaling, and provides excellent developer experience with zero configuration needed!