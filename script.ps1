& "C:\Windows\System32\notepad.exe"
Start-Process -FilePath "notepad.exe" -ArgumentList "example.txt"
Start-Sleep -Seconds 5
Stop-Process -Name "notepad" -Force
