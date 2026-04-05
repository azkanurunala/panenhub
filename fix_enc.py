import os

def fix_encoding(path):
    print(f"Fixing {path}...")
    try:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Try to encode back to cp1252 and decode as utf-8
        try:
            reverted = content.encode('cp1252').decode('utf-8')
            with open(path, 'w', encoding='utf-8') as f:
                f.write(reverted)
            print(f"Success: {path}")
        except EncodingWarning as ew:
            print(f"EncodingWarning: {ew}")
        except Exception as encode_e:
            print(f"Skipping {path} - characters cannot be losslessly reverted to cp1252: {encode_e}")
    except Exception as e:
        print(f"Error processing {path}: {e}")

fix_encoding('c:\\Prospects\\panenhub\\v2.html')
fix_encoding('c:\\Prospects\\panenhub\\desktop-v2.html')
