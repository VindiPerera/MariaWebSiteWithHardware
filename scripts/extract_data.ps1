$content = [System.IO.File]::ReadAllText('docs/MariaPoS-Website.html')
if ($content -match '"fdfcc9c8-795a-4011-8930-111e21c3fa4e":\{"mime":"text/javascript","compressed":true,"data":"([^"]+)"') {
    $bytes = [System.Convert]::FromBase64String($matches[1])
    $ms = New-Object System.IO.MemoryStream(,$bytes)
    $gzip = New-Object System.IO.Compression.GZipStream($ms, [System.IO.Compression.CompressionMode]::Decompress)
    $reader = New-Object System.IO.StreamReader($gzip)
    $decomp = $reader.ReadToEnd()
    [System.IO.File]::WriteAllText('scratch_data.js', $decomp)
    Write-Output "Extracted length: $($decomp.Length)"
} else {
    Write-Output "Pattern not matched"
}
