---
type: "Ludus Gameplay System"
title: "建築/拠点構築システム"
description: "安全な居住空間を作り、保管・休息・防衛の基盤を提供する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "survival"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:survival:building"
genre_id: "genre:survival"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

安全な居住空間を作り、保管・休息・防衛の基盤を提供する。

# 設計思想

『創造と機能性の両立』。完全自由配置は創造的だが複雑、厳格なグリッドは簡単だが制約が強い。スナップ機能と角度調整のバランスで作りやすさと自由度を両立する。

# 主要機能

- 建築パーツ (壁/床/屋根/扉/窓)
- 配置システム (スナップ機能で接続)
- 建築条件 (土台/支柱の必要性)
- 耐久度 (攻撃/時間で劣化)
- 修理メカニクス (素材消費で補修)
- 電力/配線 (照明/機械への供給・オプション)

# UXへの寄与

- [創造性](../../ux/8f90c76d051ae071.md)
- [安全地帯](../../ux/aab922c887c4e894.md)
- [長期投資](../../ux/ee9adee6ce914fa4.md)

# ドメイン要素

- [空間と移動](../../domains/space-and-navigation.md)
- [対立と解決](../../domains/conflict-and-resolution.md)
- [ルールと状態](../../domains/rules-and-state.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [クラフト/製作システム](./crafting.md) の後に実装する。
