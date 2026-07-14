---
type: "Ludus Game Genre"
title: "アクションゲーム"
description: "プレイヤーの反射神経と判断力を試すジャンル。リアルタイム入力と即座のフィードバックが核心で、直感的な操作感とプレイヤー行動への明確な応答が重要。"
tags:
  - "ludus"
  - "gameplay"
  - "genre"
  - "action"
timestamp: "2026-07-15T00:00:00+09:00"
source_import_id: "src_0001"
source_page_id: "30453028-8e8d-801e-a092-c566dd39c097"
source_graph: "graph/action.json"
---

# コア体験

プレイヤーの反射神経と判断力を試すジャンル。リアルタイム入力と即座のフィードバックが核心で、直感的な操作感とプレイヤー行動への明確な応答が重要。

# 主要システム

- [キャラクターコントローラー](../systems/action/character-controller.md)
- [ヒットストップ (Hit Pause/Hit Freeze)](../systems/action/hit-stop.md)
- [バレットタイム (スローモーション)](../systems/action/bullet-time.md)
- [コンボシステム](../systems/action/combo.md)
- [ロックオンシステム](../systems/action/lock-on.md)
- [無敵時間 (Invincibility Frames, i-frames)](../systems/action/i-frames.md)
- [スタミナ/リソース管理](../systems/action/stamina.md)
- [カメラシステム](../systems/action/camera.md)

# 実装順序

1. キャラクターコントローラー
2. カメラシステム
3. 基本攻撃システム
4. ヒットストップ
5. コンボシステム
6. 無敵時間
7. ロックオンシステム
8. スタミナ管理
9. バレットタイム (オプション)
