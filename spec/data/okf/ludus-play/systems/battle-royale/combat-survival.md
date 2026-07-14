---
type: "Ludus Gameplay System"
title: "戦闘と生存"
description: "射撃、遮蔽、被弾、回復を扱い、情報不足下の対立を成立させる。"
tags:
  - "ludus"
  - "gameplay-system"
  - "battle-royale"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:battle-royale:combat-survival"
genre_id: "genre:battle-royale"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

射撃、遮蔽、被弾、回復を扱い、情報不足下の対立を成立させる。

# 設計思想

先に見つけた側だけが勝つのでなく、対応の余地を残す。

# 主要機能

- 照準と弾道
- 遮蔽と位置取り
- 回復・防具

# UXへの寄与

- [対峙の緊張](../../ux/4c64970ac6a535b5.md)
- [技能表現](../../ux/a1c1a67d02963016.md)

# ドメイン要素

- [入力と操作](../../domains/input-and-control.md)
- [空間と移動](../../domains/space-and-navigation.md)
- [対立と解決](../../domains/conflict-and-resolution.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [戦利品とインベントリ](./loot-inventory.md) の後に実装する。
