---
type: "Ludus Gameplay System"
title: "遭遇と獲得"
description: "環境条件と個体状態に応じてクリーチャーを発見、勧誘、捕獲する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "creature-collector"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:creature-collector:encounter-capture"
genre_id: "genre:creature-collector"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

環境条件と個体状態に応じてクリーチャーを発見、勧誘、捕獲する。

# 設計思想

希少性の根拠を環境と行動から推測可能にする。

# 主要機能

- 出現条件
- 捕獲確率
- 失敗と逃走

# UXへの寄与

- [発見](../../ux/eff44e759df967c5.md)
- [緊張](../../ux/a1ffa9bbe49f610d.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)
- [コンテンツとペーシング](../../domains/content-and-pacing.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- このジャンル内で先行関係は定義されていない。
