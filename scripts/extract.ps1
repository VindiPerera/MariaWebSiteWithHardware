$content = [System.IO.File]::ReadAllText('docs/MariaPoS-Website.html')
if ($content -match '"bb8cf9c0-e090-4045-9429-0aa8dce00411":\{"mime":"text/html","compressed":true,"data":"([^"]+)"') {
    $bytes = [System.Convert]::FromBase64String($matches[1])
    $ms = New-Object System.IO.MemoryStream(,$bytes)
    $gzip = New-Object System.IO.Compression.GZipStream($ms, [System.IO.Compression.CompressionMode]::Decompress)
    $reader = New-Object System.IO.StreamReader($gzip)
    $decomp = $reader.ReadToEnd()
    [System.IO.File]::WriteAllText('scratch_hardware.html', $decomp)
    Write-Output "Extracted length: $($decomp.Length)"
    Write-Output $decomp.Substring(0, [Math]::Min(1000, $decomp.Length))
} else {
    Write-Output "Pattern not matched"
}
