---
type: "Ludus Gameplay System"
title: "グラウンドポンド (Ground Pound)/下突き"
description: "空中から急降下攻撃を行い、敵の撃破や特殊ギミックの起動を可能にする。"
tags:
  - "ludus"
  - "gameplay-system"
  - "platformer"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:platformer:ground-pound"
genre_id: "genre:platformer"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

空中から急降下攻撃を行い、敵の撃破や特殊ギミックの起動を可能にする。

# 設計思想

『重力を武器にする』メカニクス。落下という受動的な動作を能動的な攻撃に変換する。連続バウンドはリズムを生み、敵の連鎖撃破がスピードランの鍵となる。

# 主要機能

- 急降下 (空中で下入力+攻撃で高速落下)
- 着地衝撃 (着地時に周囲にダメージ判定)
- バウンス (敵や特定オブジェクトに当たると跳ね返る)
- 落下速度制御 (通常より速いが制御不能にならない程度)

# UXへの寄与

- [攻撃の多様性](../../ux/9a2ef51437276fbd.md)
- [リスク・リターン](../../ux/73858d4b168c7e3b.md)
- [パズル要素](../../ux/fa691e91cceb9039.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [入力と操作](../../domains/input-and-control.md)
- [対立と解決](../../domains/conflict-and-resolution.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [音とリズム](../../domains/audio-and-rhythm.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [エッジハング/レッジグラブ (Ledge Grab)](./ledge-grab.md) の後に実装する。
