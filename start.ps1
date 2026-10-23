# Launch Solar System & Gravity Exhibit in default web browser
$htmlPath = Join-Path $PSScriptRoot "index.html"
Write-Host "Opening Solar System & Gravity Exhibit in your default browser..." -ForegroundColor Cyan
Start-Process $htmlPath
