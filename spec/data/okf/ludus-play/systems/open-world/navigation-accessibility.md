---
type: "Ludus Gameplay System"
title: "ナビゲーション支援とアクセシビリティ"
description: "目的地案内、入力補助、視認性設定を通じて、多様な遊び方で世界を探索できるようにする。"
tags:
  - "ludus"
  - "gameplay-system"
  - "open-world"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:open-world:navigation-accessibility"
genre_id: "genre:open-world"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

目的地案内、入力補助、視認性設定を通じて、多様な遊び方で世界を探索できるようにする。

# 設計思想

支援を強制せず、探索の不確かさを自分で調整できるようにする。

# 主要機能

- 案内強度の設定
- 入力リマップ
- 視認性・字幕設定

# UXへの寄与

- [アクセス可能性](../../ux/0fa71ff85bb71375.md)
- [安心感](../../ux/1be380841e916268.md)

# ドメイン要素

- [入力と操作](../../domains/input-and-control.md)
- [空間と移動](../../domains/space-and-navigation.md)
- [アクセシビリティと支援](../../domains/accessibility-and-assistance.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [テキスト・ベクター・モーショングラフィックス](../../pictor/text-vector-motion.md)
- [シーン描画](../../pictor/scene-rendering.md)

# 実装上の前提

- [移動短縮と保存](./fast-travel-save.md) の後に実装する。
